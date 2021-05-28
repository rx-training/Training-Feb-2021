using System;

namespace DelegateDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            var tester = new MediaTester();
            var mp3 = new MP3Player();
            var mp4 = new MP4Player();

            var mp3Delegate = new MediaTester.TestMedia(mp3.PlayMP3File);
            var mp4Delegate = new MediaTester.TestMedia(mp4.PlayMP4File);

            tester.RunTest(mp3Delegate);
            tester.RunTest(mp4Delegate);

            Console.WriteLine("\n\n\n");

            Document doc = new Document();
            doc.Text = "Document text goes here";

            var blogPoster = new BlogPoster();
            var blogDelegate = new Document.SendDoc(blogPoster.PostToBlog);
            doc.ReportSedingResult(blogDelegate);
            
            Console.WriteLine("\n\n\n");

            var sendEmail = new EmailSender();
            var emailDelegate = new Document.SendDoc(sendEmail.SendEmail);
            doc.ReportSedingResult(blogDelegate);
        }
    }
}
