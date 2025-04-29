import asyncio
import pygame

pygame.init()

fps = 60

async def run_game():
    while True:
        WIDTH, HEIGHT = 500, 500
        screen = pygame.display.set_mode((WIDTH, HEIGHT))
        ORANGE = (255,165,0)
        screen.fill(ORANGE)
        await asyncio.sleep(1 / fps)