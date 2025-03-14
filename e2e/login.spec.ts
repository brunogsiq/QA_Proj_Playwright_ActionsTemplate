import { test, expect, Page } from '@playwright/test';

const toast = async (page: Page, message: string) =>
{
	const target = page.locator('div[role=status]');
	await expect(target).toHaveText(message);
};

const modal = async (page: Page, message: string) =>
{
	const target = page.locator('.swal2-html-container');
	await expect(target).toHaveText(message);
};

const login = async (page: Page, user: string, pass: string) =>
{
	await page.goto('/')

	const username = page.locator('[name=user]');
	const password = page.locator('[name=pass]');

	user 
	? await username.fill(user) : null

	pass
	? await password.fill(pass) : null

	await page.click('css=button >> text=Entrar');
};

test('01 - Validar acesso ao portal do projeto..', async ({page}) =>
{	
	const logotipo = page.locator('.App-header img')
	const message = page.locator('.App-header p')

	await page.goto('https://loginxp.vercel.app/')

	await expect(logotipo)
		.toBeVisible()
	await expect(message)
		.toHaveText('Login')
});

test('02 - Validar visualização dos inputs de usuário..', async ({page}) =>
{	
	const logotipo = page.locator('.App-header img')
	const message = page.locator('.App-header p')

	await page.goto('https://loginxp.vercel.app/')

	await expect(logotipo)
		.toBeVisible()
	await expect(message)
		.toHaveText('Login')
});

test('03 - Validar visualização dos critérios de aceite da tela..', async ({page}) =>
{	
	const username = page.locator('[name=user]');
	const password = page.locator('[name=pass]');
	const buttonEnter = page.locator('.btn-primary');

	await page.goto('https://loginxp.vercel.app/')

	await expect(username)
		.toBeVisible()
		await expect(username)
			.toHaveAttribute('placeholder', 'nome de usuário')

	await expect(password)
		.toBeVisible()
		await expect(password)
			.toHaveAttribute('placeholder', 'senha secreta')

	await expect(buttonEnter)
		.toBeVisible()
			await expect(buttonEnter)
			.toHaveText('Entrar')
});

test('04 - Validar usuário obrigatório.', async ({ page }) =>
{
	const target = page.locator('div[role=status]');

	await expect(target)
		.not.toBeVisible()

	await login(page, '', 'senha123');

	await expect(target)
		.toBeVisible();

	await toast(page, 'Informe o seu nome de usuário!');
});

test('05 - Validar senha obrigatória.', async ({ page }) =>
{
	const target = page.locator('div[role=status]');

	await expect(target)
		.not.toBeVisible();

	await login(page,'qa', '');

	await expect(target)
		.toBeVisible();

	await toast(page, 'Informe a sua senha secreta!');
});

test('06 - Validar usuário inexistente.', async ({ page }) =>
{
	const target = page.locator('div[role=status]');

	await expect(target)
		.not.toBeVisible();

	await login(page,'teste', 'teste');

	await expect(target)
		.toBeVisible();

	await toast(page, 'Oops! Credenciais inválidas :(');
});

test('07 - Validar senha incorreta.', async ({ page }) =>
{
	const target = page.locator('div[role=status]');

	await expect(target)
		.not.toBeVisible();

	await login(page,'qa', 'teste');

	await expect(target)
		.toBeVisible();

	await toast(page, 'Oops! Credenciais inválidas :(');
});

/*
//Cenário criado propositalmente para falhar e analisar o workflow
test('08 - senha incorreta.', async ({ page }) =>
{
	await login(page,'qa', 'teste')
	await toast(page, 'Oops! Senha inválidas :(')
});
*/

test('08 - Validar login com sucesso.', async ({ page }) =>
{
	const target = page.locator('.swal2-html-container');

	await expect(target)
		.not.toBeVisible();

	await login(page,'qa', 'xperience');

	await expect(target)
		.toBeVisible();

	await modal(page, 'Suas credenciais são válidas :)');
});