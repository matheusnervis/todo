from typing import Any, List

from fastapi import FastAPI
from starlette.staticfiles import StaticFiles

from .router import routes
from .config import DEBUG

def create_app(debug=DEBUG):
    app = FastAPI(debug=debug, routes=routes)
    app.mount('/static', StaticFiles(directory='app/static'))

    return app
