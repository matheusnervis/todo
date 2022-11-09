from .db import SessionLocal


async def get_db_session():
    with SessionLocal() as db:
        yield db
