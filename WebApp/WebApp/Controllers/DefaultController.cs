using System.Collections.Generic;
using System.Web.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        public List<Person> persons = new List<Person> { new Person { Id = 1, Name = "Ken Thoi", Email = "ken@gmail.com" },
                                                         new Person { Id = 2, Name = "Kem", Email = "kem@gmail.com" },
                                                         new Person { Id = 3, Name = "Kun", Email = "kun@gmail.com" },
                                                         new Person { Id = 4, Name = "Xuan Do Thanh", Email = "xuan@gmail.com" } };

        public JsonResult GetAllPersons()
        {
            return Json(new { persons }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult GetPersonDetails(int personId)
        {
            var person = persons.Find(c => c.Id == personId);
            return Json(new { person }, JsonRequestBehavior.AllowGet);
        }
    }
}