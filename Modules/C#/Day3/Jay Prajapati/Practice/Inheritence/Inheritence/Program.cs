using System;
using System.Reflection;
using  static System.Console;
namespace Inheritence
{
    using System;

    public class A
    {
        private int value = 10;

        public class B : A
        {
            public int GetValue()
            {
                return this.value;
            }
        }
    }

    public class C : A
    {
        //    public int GetValue()
        //    {
        //        return this.value;
        //    }
    }
    public class D
    {
        public void Method1()
        {
            // Method implementation.
        }
    }

    public class E : D
    { }

    public class Example
    {
        public static void Main(string[] args)
        {
            var b = new A.B();
            Console.WriteLine(b.GetValue());

            E c = new E();
            c.Method1();

            Console.WriteLine("\n\n\n");
            Type t = typeof(SimpleClass);
            BindingFlags flags = BindingFlags.Instance | BindingFlags.Static | BindingFlags.Public |
                                 BindingFlags.NonPublic | BindingFlags.FlattenHierarchy;
            MemberInfo[] members = t.GetMembers(flags);
            Console.WriteLine($"Type {t.Name} has {members.Length} members: ");
            foreach (var member in members)
            {
                string access = "";
                string stat = "";
                var method = member as MethodBase;
                if (method != null)
                {
                    if (method.IsPublic)
                        access = " Public";
                    else if (method.IsPrivate)
                        access = " Private";
                    else if (method.IsFamily)
                        access = " Protected";
                    else if (method.IsAssembly)
                        access = " Internal";
                    else if (method.IsFamilyOrAssembly)
                        access = " Protected Internal ";
                    if (method.IsStatic)
                        stat = " Static";
                }
                var output = $"{member.Name} ({member.MemberType}): {access}{stat}, Declared by {member.DeclaringType}";
                Console.WriteLine(output);

            }

            Console.WriteLine("\n\n\n");
            var packard = new Automobile("Packard", "Custom Eight", 1948);
            Console.WriteLine(packard);



            Console.WriteLine("\n\n\n");
            var book = new Book("The Tempest", "0971655819", "Shakespeare, William",
                         "Public Domain Press");
            ShowPublicationInfo(book);
            book.Publish(new DateTime(2016, 8, 18));
            ShowPublicationInfo(book);

            var book2 = new Book("The Tempest", "Classic Works Press", "Shakespeare, William");
            Write($"{book.Title} and {book2.Title} are the same publication: " +
                  $"{((Publication)book).Equals(book2)}");

            Console.WriteLine("\n\n\n");

            Shape[] shapes = { new Rectangle(10, 12), new Square(5),
                        new Circle(3) };
            foreach (var shape in shapes)
            {
                Console.WriteLine($"{shape}: area, {Shape.GetArea(shape)}; " +
                                  $"perimeter, {Shape.GetPerimeter(shape)}");
                var rect = shape as Rectangle;
                if (rect != null)
                {
                    Console.WriteLine($"   Is Square: {rect.IsSquare()}, Diagonal: {rect.Diagonal}");
                    continue;
                }
                var sq = shape as Square;
                if (sq != null)
                {
                    Console.WriteLine($"   Diagonal: {sq.Diagonal}");
                    continue;
                }
            }
            Console.WriteLine("\n\n\n");

        }

        public static void ShowPublicationInfo(Publication pub)
        {
            string pubDate = pub.GetPublicationDate();
            WriteLine($"{pub.Title}, " +
                      $"{(pubDate == "NYP" ? "Not Yet Published" : "published on " + pubDate):d} by {pub.Publisher}");
        }
    }
    // The example displays the following output:
    //       10

   
    public class SimpleClass
    {

    }







}
