﻿using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
	public class PenggunaController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult DataUser()
		{
			return View();
		}
	}
}
