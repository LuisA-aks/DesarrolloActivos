using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class TablaReparacion
    {
        public string numeroboleta { get; set; }
        public string FechaIngreso { get; set; }
        public string ObservacionReparacion { get; set; }
        public string placa_Activo { get; set; }
        public string descripcion { get; set; }
    }
}