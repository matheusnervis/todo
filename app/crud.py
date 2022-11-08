from sqlalchemy.orm import Session

from . import models, schemas


def get_task(db: Session, task_id):
    return db.query(models.Task).filter(models.Task.id == task_id).first()


def get_tasks(db: Session):
    return db.query(models.Task).all()


def create_task(db: Session, task: schemas.TaskCreate):
    db.add(db_task := models.Task(description=task.description))
    db.commit()
    db.refresh(db_task)
    return db_task


def update_task(db: Session, task_id: int, done: bool):
    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()
    db_task.done = done
    db.commit()
    db.refresh(db_task)
    return db_task


def delete_task(db: Session, task_id: int):
    db.delete(db.query(models.Task).filter(models.Task.id == task_id).first())
    db.commit()
