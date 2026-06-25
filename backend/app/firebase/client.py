import os

try:
    import firebase_admin
    from firebase_admin import credentials, firestore
except Exception:  # pragma: no cover - fallback for local/CI environments
    firebase_admin = None
    credentials = None
    firestore = None


class _InMemoryDocument:
    def __init__(self, collection, doc_id):
        self.collection = collection
        self.doc_id = doc_id
        self._data = None
        self.exists = False

    def set(self, data):
        self._data = data
        self.exists = True
        self.collection._store[self.doc_id] = data

    def get(self):
        return _InMemorySnapshot(self.collection._store.get(self.doc_id), self.doc_id in self.collection._store)


class _InMemorySnapshot:
    def __init__(self, data, exists):
        self._data = data
        self.exists = exists

    def to_dict(self):
        return self._data or {}


class _InMemoryCollection:
    def __init__(self, name):
        self.name = name
        self._store = {}

    def document(self, doc_id):
        return _InMemoryDocument(self, doc_id)


class _InMemoryFirestore:
    def collection(self, name):
        return _InMemoryCollection(name)


class FirebaseClient:
    _instance = None
    _db = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def initialize(self):
        if self._db is not None:
            return self._db

        if firebase_admin is None or firestore is None:
            self._db = _InMemoryFirestore()
            return self._db

        try:
            if not firebase_admin._apps:
                project_id = os.getenv("FIREBASE_PROJECT_ID", "resolveai")
                cred_path = os.getenv("FIREBASE_CREDENTIAL_PATH")
                if cred_path:
                    cred = credentials.Certificate(cred_path)
                    firebase_admin.initialize_app(cred, {"projectId": project_id})
                else:
                    firebase_admin.initialize_app(options={"projectId": project_id})
            self._db = firestore.client()
        except Exception:
            self._db = _InMemoryFirestore()

        return self._db

    @property
    def db(self):
        return self.initialize()


firebase_client = FirebaseClient()
db = firebase_client.db
