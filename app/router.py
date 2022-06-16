from starlette.responses import FileResponse
from starlette.routing import Route


async def index(request):
    return FileResponse("app/templates/index.html")


routes = [Route("/", index, methods=["GET"], name="index")]
