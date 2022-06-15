from starlette.responses import HTMLResponse
from starlette.routing import Route


def index(request):
    return HTMLResponse("Hello world")


routes = [Route("/", index, methods=["GET"], name="index")]
