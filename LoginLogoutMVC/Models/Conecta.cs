using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Conecta
    {
        public SqlConnection conectaDB()
        {
            
            return  new SqlConnection("Data Source = DESKTOP - LS14HCO; Initial Catalog = DTIV120; Integrated Security = True");
        }
    }
   
}