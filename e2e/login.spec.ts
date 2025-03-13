import { test, expect, Page } from '@playwright/test';

test('01 - usuário obrigatório', async ({ page }) =>
{
  await login(page, '', 'senha123')
  await toast(page, 'Informe o seu nome de usuário!s')
});

test('02 - senha obrigatória', async ({ page }) =>
{
  await login(page,'qa', '')
  await toast(page, 'Informe a sua senha secreta!')
})

test('03 - usuário não existe', async ({ page }) =>
{
  await login(page,'teste', 'teste')
  await toast(page, 'Oops! Credenciais inválidas :(')
})

test('04 - senha incorreta', async ({ page }) =>
{
  await login(page,'qa', 'teste')
  await toast(page, 'Oops! Credenciais inválidas :(')
})

test('05 - com sucesso', async ({ page }) =>
{
  await login(page,'qa', 'xperience')
  await modal(page, 'Suas credenciais são válidas :)')
})

const toast = async (page: Page, message: string) =>
{
  const target = page.locator('div[role=status]')
  await expect(target).toHaveText(message);
}

const modal = async (page: Page, message: string) =>
{
  const target = page.locator('.swal2-html-container')
  await expect(target).toHaveText(message);
}

const login = async (page: Page, user: string, pass: string) =>
{
    await page.goto('/')

    const username = page.locator('[name=user]')
    const password = page.locator('[name=pass]')

    user 
      ? await username.fill(user) : null

    pass
      ? await password.fill(pass) : null

    await page.click('css=button >> text=Entrar')
}

