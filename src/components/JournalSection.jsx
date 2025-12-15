export const JournalSection = () => {
  return (
    <section id="journal" className="container mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-6">Journal</h1>
      <p className="text-foreground/80 mb-8">
      This journal documents our educational tour where we visited various technology and communications institutions, gaining firsthand exposure to real-world systems and operations.
      </p>

      <div className="space-y-6">
        <article className="p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <figure className="bg-background/50 rounded overflow-hidden">
              <img src="/projects/1.png" alt="1" className="w-full h-48 object-cover" />
              <figcaption className="p-3 text-sm text-foreground/80">
                The visit to the Davao City Center for Communications and
                Emergency Response showcased how technology supports public
                safety and emergency management. We observed how real-time
                monitoring, communication systems, and coordinated response
                mechanisms are used to handle emergencies efficiently. This
                visit highlighted the critical role of ICT in saving lives and
                maintaining public order.
              </figcaption>
            </figure>

            <figure className="bg-background/50 rounded overflow-hidden">
              <img src="/projects/2.png" alt="2" className="w-full h-48 object-cover" />
              <figcaption className="p-3 text-sm text-foreground/80">
                Thankyou Masarap Sya!
              </figcaption>
            </figure>

            <figure className="bg-background/50 rounded overflow-hidden">
              <img src="/projects/jairosoft.png" alt="jairosoft" className="w-full h-48 object-cover" />
              <figcaption className="p-3 text-sm text-foreground/80">
                Our experience at Jarosoft Inc. focused on software development
                and business solutions. We gained insights into how software
                products are designed, developed, and deployed to meet client
                needs. The visit emphasized teamwork, system customization,
                and the practical application of programming and system
                analysis concepts.
              </figcaption>
            </figure>

            <figure className="bg-background/50 rounded overflow-hidden">
              <img src="/projects/jairosft2.png" alt="jairosoft2" className="w-full h-48 object-cover" />
              <figcaption className="p-3 text-sm text-foreground/80">
                Were amazed with this set-up where they also focused on networking not just software development

              </figcaption>
            </figure>

            <figure className="bg-background/50 rounded overflow-hidden">
              <img src="/projects/pldt.png" alt="pldt" className="w-full h-48 object-cover" />
              <figcaption className="p-3 text-sm text-foreground/80">
                Our visit to PLDT Inc. provided valuable insights into the
                country’s telecommunications infrastructure. We learned about
                network operations, data transmission, and how PLDT manages
                large-scale communication services to support millions of users
                nationwide. The discussion emphasized reliability, security,
                and the role of telecom companies in digital transformation.
              </figcaption>
            </figure>

            <figure className="bg-background/50 rounded overflow-hidden">
              <img src="/projects/vitro.jpeg" alt="vitro" className="w-full h-48 object-cover" />
              <figcaption className="p-3 text-sm text-foreground/80">
                At VITRO Inc., we were introduced to data center operations and
                the importance of secure, high-availability environments. The
                tour highlighted how servers, cloud services, and disaster
                recovery systems are managed to ensure continuous service.
                This visit deepened our understanding of data management and
                enterprise-level IT solutions.
              </figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
};
