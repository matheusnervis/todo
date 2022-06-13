from starlette.routing import Route
from starlette.responses import HTMLResponse

def index(request):
    return HTMLResponse("Hello world")

routes = [
    Route('/', index, methods=['GET'], name='index')
]