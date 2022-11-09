from fastapi.exceptions import HTTPException
from fastapi.param_functions import Body, Depends
from fastapi.routing import APIRouter
from sqlalchemy.orm.session import Session
from starlette.responses import FileResponse
from starlette.routing import Route

from . import crud, schemas
from .utils import get_db_session


async def index(request):
    return FileResponse("app/templates/index.html")


routes = [Route("/", index, methods=["GET"], name="index")]

api_router = APIRouter(prefix="/api")


@api_router.get("/tasks/{task_id}", response_model=schemas.Task)
async def get_task(task_id: int, db: Session = Depends(get_db_session)):
    db_task = crud.get_task(db, task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task


@api_router.post("/task/create", response_model=schemas.Task)
async def create_task(task: schemas.TaskCreate, db: Session = Depends(get_db_session)):
    db_task = crud.create_task(db, task)
    return db_task


@api_router.delete("/task/{task_id}")
async def delete_task(task_id: int, db: Session = Depends(get_db_session)):
    db_task = crud.get_task(db, task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    crud.delete_task(db, task_id)


@api_router.put("/task/{task_id}")
async def update_task(
    task_id: int, done: bool = Body(True, embed=True), db=Depends(get_db_session)
):
    db_task = crud.get_task(db, task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    db_task = crud.update_task(db, task_id, done)


@api_router.get("/task/list", response_model=list[schemas.Task])
async def get_tasks(db: Session = Depends(get_db_session)):
    db_tasks = crud.get_tasks(db)
    return db_tasks
