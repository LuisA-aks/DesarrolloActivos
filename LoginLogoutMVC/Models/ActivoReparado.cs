using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class ActivoReparado
    {
        public string RepararActivo(int idActivo, int iduser, string observaciones, string fecha, string numboleta, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_RepararActivo @idActivo,@idUsuario,@Observaciones,@fecha,@numboleta";
                    mycmd.Parameters.Add("@idActivo", SqlDbType.Int, 150).Value = idActivo;
                    mycmd.Parameters.Add("@idUsuario", SqlDbType.Int, 150).Value = iduser;
                    mycmd.Parameters.Add("@Observaciones", SqlDbType.VarChar, 150).Value = observaciones;
                    mycmd.Parameters.Add("@fecha", SqlDbType.VarChar, 150).Value = fecha;
                    mycmd.Parameters.Add("@numboleta", SqlDbType.VarChar, 150).Value = numboleta;
                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        mensaje = rdr["Mensaje"].ToString();
                        //reto codigo
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
            return mensaje;
        }
    }
}