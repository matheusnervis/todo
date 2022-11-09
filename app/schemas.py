from pydantic import BaseModel


class TaskCreate(BaseModel):
    description: str


class Task(TaskCreate):
    id: int
    done: bool

    class Config:
        orm_mode = True
