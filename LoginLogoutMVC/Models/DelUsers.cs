using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class DelUsers
    {
        public List<DelUser> mostrartodo(string conexionF)
        {
            List<DelUser> l = new List<DelUser>();


            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaUserOcultar";


                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        DelUser d = new DelUser()
                        {
                            id_Usuario = rdr["id_Usuario"].ToString(),
                            nombre_Usuario = rdr["nombre_Usuario"].ToString(),
                        };
                        l.Add(d);
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