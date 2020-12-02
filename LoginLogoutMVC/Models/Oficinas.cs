using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Oficinas
    {
        public string NombreOficina { get; set; }
        public string CoordinadorOficina { get; set; }
        public string TelefonoOficina { get; set; }
        public string CorreoOficina { get; set; }
        public string DirrecionOficina { get; set; }
        public string ObservacionesOficina { get; set; }
        public int IdRegion { get; set; }

      //  public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
       // public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";

        public string agregaroficina(int esbodega, string nombreoficina, string coordinadoroficina, string telefonooficina, string correooficina, string direccionofi, string observaciones, int idregion, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_IngresarOficina @esbodega, @nombreoficina, @coordinadoroficina, @telefonooficina, @correooficina,@direccion,@observaciones,@idregion";
                mycmd.Parameters.Add("@esbodega", SqlDbType.Int, 150).Value = esbodega;
                mycmd.Parameters.Add("@nombreoficina", SqlDbType.VarChar, 150).Value = nombreoficina;
                mycmd.Parameters.Add("@coordinadoroficina", SqlDbType.VarChar, 150).Value = coordinadoroficina;
                mycmd.Parameters.Add("@telefonooficina", SqlDbType.VarChar, 150).Value = telefonooficina;
                mycmd.Parameters.Add("@correooficina", SqlDbType.VarChar, 150).Value = correooficina;
                mycmd.Parameters.Add("@direccion", SqlDbType.VarChar, 150).Value = direccionofi;
                mycmd.Parameters.Add("@observaciones", SqlDbType.VarChar, 150).Value = observaciones;
                mycmd.Parameters.Add("@idregion", SqlDbType.Int, 150).Value = idregion;
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