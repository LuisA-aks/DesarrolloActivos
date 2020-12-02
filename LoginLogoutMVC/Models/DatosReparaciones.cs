using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class DatosReparaciones
    {
        public List<DatosReparacion> damedatatosactivo(string conexionF, string placa)
        {
            List<DatosReparacion> pro = new List<DatosReparacion>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaDatosParaReparacion @placa";
                    mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        DatosReparacion p = new DatosReparacion()
                        {
                            placa_Activo = rdr["placa_Activo"].ToString(),
                            id_Activo = rdr["id_Activo"].ToString(),
                            descripcion = rdr["descripcion"].ToString(),
                            nombre_modelo = rdr["nombre_modelo"].ToString()


                        };
                        pro.Add(p);
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
                return pro;
            }
        }
    }
}