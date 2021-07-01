using BigBasketPro.Interfaces;
using BigBasketPro.Models;
using BigBasketPro.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigBasketPro
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddCors(options =>
            {
                options.AddPolicy(name: "policy1",
                                  builder =>
                                  {
                                      builder.AllowAnyOrigin()
                                             .AllowAnyMethod()
                                             .AllowAnyHeader();
                                  });
            });


            //For Identity
            services.AddIdentity<BigBasketUser, IdentityRole>()
            .AddEntityFrameworkStores<BigBasketProjectContext>()
            .AddDefaultTokenProviders();

            //AddingAuthentication
            services.AddAuthentication(option =>
            {
                option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                option.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

            })

               //Addning jwt bearer
               .AddJwtBearer(option =>
               {
                   option.SaveToken = true;
                   option.RequireHttpsMetadata = false;
                   option.TokenValidationParameters = new TokenValidationParameters()
                   {
                       ValidateIssuer = true,
                       ValidateAudience = true,
                       ValidAudience = Configuration["JWT:ValidAudience"],
                       ValidIssuer = Configuration["JWT:ValidIssuer"],
                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                   };
               });



            services.AddTransient<IProduct, ProductRepository>();
            services.AddTransient<IBrand, BrandRepository>();
            services.AddTransient<ICategory, CategoryRepository>();
            services.AddTransient<ISale, SaleRepository>();
            services.AddTransient<ICity, CityRepository>();
            services.AddTransient<ICountry, CountryRepository>();
            services.AddTransient<ICustomer, CustomerRepository>();
            services.AddTransient<ICart, CartRepository>();
            services.AddTransient<IbbSaleDetail, SaleDetailRepository>();
            services.AddTransient<IProductDetail, ProductDetailRepository>();
            services.AddTransient<ISaleCustomer, SaleCustomerRepository>();

            services.AddDbContext<BigBasketProjectContext>(option => option.UseSqlServer(Configuration.GetConnectionString("ConnStr")));
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "BigBasketPro", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "BigBasketPro v1"));
            }

          

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("policy1");


            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
