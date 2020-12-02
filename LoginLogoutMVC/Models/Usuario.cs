using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Usuario
    {
        public string nombre_usuario { get; set; }
        public string apellido_usuario { get; set; }
        public string correo { get; set; }
        public string rol { get; set; }
    }
}