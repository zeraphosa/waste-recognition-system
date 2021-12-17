using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Web;
using System.IO;

namespace atik_tespit_sistemi.MVC.Controllers
{
    public class PhotoController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }

    public ActionResult Capture()
    {
        var stream = Request.InputStream;
        string dump;
        using (var reader = new StreamReader(stream))
        {
            dump = reader.ReadToEnd();
            DateTime nm = DateTime.Now;
            string date = nm.ToString("yyyymmddMMss");
            var path = Server.MapPath("~/WebImages/" + date + "test.jpg");
            System.IO.File.WriteAllBytes(path, String_To_Bytes2(dump));
            ViewData["path"] = date + "test.jpg";
            Session["val"] = date + "test.jpg";
        }
        return View("Index");
    }
}
