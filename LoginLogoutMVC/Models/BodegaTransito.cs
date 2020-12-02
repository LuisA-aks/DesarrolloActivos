using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class BodegaTransito
    {
        public string EstadoBodegaTransito { get; set; }
        public string FechaRecepcionTransito { get; set; }
        public string FechaCambiTransito { get; set; }
        public string DescripcionTransito { get; set; }
        public int IdUsuario { get; set; }
        public int IdActivo { get; set; }
    }
}