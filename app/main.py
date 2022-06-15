from fastapi import FastAPI
from starlette.staticfiles import StaticFiles

from .config import DEBUG
from .router import routes


def create_app(debug=DEBUG):
    app = FastAPI(debug=debug, routes=routes)
    app.mount("/app/static", StaticFiles(directory="app/static"))

    return app
