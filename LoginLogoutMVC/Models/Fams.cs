using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Fams
    {
        public List<Fam> mostrartodo(string conexionF)
        {
            List<Fam> l = new List<Fam>();


            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaFamilias";


                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Fam f = new Fam()
                        {
                      id_Familia= rdr["id_Familia"].ToString(),
                      nombre_Familia = rdr["nombre_Familia"].ToString(),
                        };
                      
                        l.Add(f);
                    }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
            }
            return l;
        }
    }
}