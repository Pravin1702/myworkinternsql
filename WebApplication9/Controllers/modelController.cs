using ExcelDataReader;
using Microsoft.AspNetCore.Mvc;
using WebApplication9.Models;

namespace WebApplication9.Controllers
{
    public class modelController : Controller
    {
       
        [HttpGet]
        public IActionResult Index()
        {
            return View(new List<model>());
        }
        [HttpPost]
        public IActionResult Index(IFormCollection form)
        {
            List<model> users = new List<model>();
            var fileName = "./new.xlsx";
            
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
            using (var stream = System.IO.File.Open(fileName, FileMode.Open, FileAccess.Read))
            {
                using (var reader = ExcelReaderFactory.CreateReader(stream))
                {

                    while (reader.Read()) 
                    {
                        users.Add(new model
                        {
                            Id =reader.GetValue(0).ToString(),
                            Region = reader.GetValue(1).ToString(),
                            Rep = reader.GetValue(2).ToString(),
                            Item = reader.GetValue(3).ToString(),
                            Unit =reader.GetValue(4).ToString()
                        }) ;
                    }
                }
            }
            return View(users);
        }
    }
}
