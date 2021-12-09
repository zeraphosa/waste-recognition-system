using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace atik_tespit_sistemi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Deneme : ControllerBase
    {
        public int[] abc()
        {
            int[] xy = { 1, 2, 3, 4, 5, 6 };

            return xy;
        }
    }
}
