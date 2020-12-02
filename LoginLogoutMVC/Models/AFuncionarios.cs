using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class AFuncionarios
    {
        public List<AFuncionario> mostrarfuncionario(string oficina,string conexioF)
        {
            List<AFuncionario> l = new List<AFuncionario>();
            string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT4333;Integrated Security=True";
            //string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
            using (SqlConnection myConn = new SqlConnection(connString))
            {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_DameFuncionarios @Oficina";
                mycmd.Parameters.Add("@Oficina", SqlDbType.Int, 150).Value = Convert.ToInt16(oficina);

                SqlDataReader rdrm = mycmd.ExecuteReader();
                while (rdrm.Read())
                {
                    AFuncionario f = new AFuncionario()
                    {
                        id_Funcionario = rdrm["id_Funcionario"].ToString(),
                        nombre_Funcionario = rdrm["nombre_Funcionario"].ToString()
                    };
                    l.Add(f);
                   
                }
                
             
                return l;
            }
        }
    }
}