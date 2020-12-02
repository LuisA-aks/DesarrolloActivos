using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla9AS
    {
        public List<Tabla9A> mostrartodo(string conexionF)
        {
            List<Tabla9A> pro = new List<Tabla9A>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaSeguro";
                   

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                       
                        Tabla9A t = new Tabla9A()
                        {
                            id_aseguramiento= rdr["id_aseguramiento"].ToString(),
                            nombre_seguro= rdr["nombre_seguro"].ToString(),
                            empresa_seguro= rdr["empresa_seguro"].ToString(),
                            descripcion_seguro= rdr["descripcion_seguro"].ToString(),
                            correo_seguro = rdr["correo_seguro"].ToString(),


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