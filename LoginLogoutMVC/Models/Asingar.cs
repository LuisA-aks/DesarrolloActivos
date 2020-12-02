using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Asingar
    {
       // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        public  string intentalo(string funcionariorg, string activosrg, string ipequipo, int user,string _numboletaAsigna, string conexionF)
        {
            string mensaje = "";
           
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {

                try { 
                    
                
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_AsignaActivos @num_boleta,@id_Funcionario, @id_Activo, @id_Usuario, @ip";
                mycmd.Parameters.Add("@num_boleta", SqlDbType.VarChar, 150).Value = _numboletaAsigna;
                mycmd.Parameters.Add("@id_Funcionario", SqlDbType.Int, 150).Value =Convert.ToInt32(funcionariorg);
                mycmd.Parameters.Add("@id_Activo", SqlDbType.Int, 150).Value = Convert.ToInt32(activosrg);
                mycmd.Parameters.Add("@id_Usuario", SqlDbType.Int, 150).Value = user;
                mycmd.Parameters.Add("@ip", SqlDbType.Int, 150).Value = ipequipo;




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