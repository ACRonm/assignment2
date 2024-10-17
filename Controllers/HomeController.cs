using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WDP2022A2Mac.Models;
using WDP2022A2Mac.Data;
using Microsoft.EntityFrameworkCore;

namespace WDP2022A2Mac.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly ApplicationDbContext _context;

    public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    public async Task<IActionResult> Index()
    {
        return View(await _context.Company.ToListAsync());
    }

    public async Task<IActionResult> Companies()
    {
        if (!User.Identity.IsAuthenticated)
        {
            foreach (var post in _context.Company)
            {
                post.canIncreaseLike = true;
            }
            await _context.SaveChangesAsync();
        }

        var allCompanies = from result in _context.Company
                           orderby result.Like descending
                           select result;
        return View(await allCompanies.ToListAsync());
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

