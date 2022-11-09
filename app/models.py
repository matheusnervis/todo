from sqlalchemy import Boolean, Column, Integer, String

from .db import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True)
    # name = Column(String(50), nullable=False)
    description = Column(String(250), nullable=False)
    done = Column(Boolean, default=False)
