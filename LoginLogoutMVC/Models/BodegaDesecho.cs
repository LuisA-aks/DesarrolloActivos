using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class BodegaDesecho
    {
        public string EstadoBodegaDesecho { get; set; }
        public string FechaDesecho { get; set; }
        public string ObservacionesDesecho { get; set; }
        public int IdUsuario { get; set; }
        public int IdActivo { get; set; }
    }
}