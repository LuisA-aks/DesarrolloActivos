using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla11AS
    {
        public List<Tabla11A> mostrartodo(string conexionF)
        {
            List<Tabla11A> pro = new List<Tabla11A>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaBodegas";
                    ///mycmd.Parameters.Add("@nombre", SqlDbType.VarChar, 150).Value = nombre;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        Tabla11A t = new Tabla11A()
                        {
                            id_Oficina = rdr["id_Oficina"].ToString(),
                            coordinador_Oficina = rdr["coordinador_Oficina"].ToString(),
                            nombre_Oficina= rdr["nombre_Oficina"].ToString(),
                            telefono_Oficina = rdr["telefono_Oficina"].ToString(),
                            correo_Oficina= rdr["correo_Oficina"].ToString(),

                        };
                        
                        pro.Add(t);
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
            return pro;
        }
    }
}