using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class DesechoTemporal
    {
        public string desechotemporal(string fecha, string observaciones, string boleta, int idfun, int idactivo, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_DesechoTemporal @idActivo,@idUsuario,@Observaciones,@fecha,@numboleta";
                mycmd.Parameters.Add("@idActivo", SqlDbType.Int, 150).Value = idactivo;
                mycmd.Parameters.Add("@idUsuario", SqlDbType.Int, 150).Value = idfun;
                mycmd.Parameters.Add("@Observaciones", SqlDbType.VarChar, 150).Value = observaciones;
                mycmd.Parameters.Add("@fecha", SqlDbType.VarChar, 150).Value = fecha;
                mycmd.Parameters.Add("@numboleta", SqlDbType.VarChar, 150).Value = boleta;

                SqlDataReader rdr = mycmd.ExecuteReader();

                while (rdr.Read())
                {
                    mensaje = rdr["Mensaje"].ToString();
                    //reto codigo
                }
                    return mensaje;
                }
            
            catch (Exception EX)
            {
                EX.GetBaseException();
            }
            finally
            {
                myConn.Close();
            }
                return mensaje;
            }

    }
}
}
