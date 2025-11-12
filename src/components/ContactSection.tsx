import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Phone, MessageCircle, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/savvy_shrajal?igsh=MTB2ajB0c25qbGNhcA==", color: "hover:text-pink-500" },
  { name: "Linkedin", icon: Linkedin, url: "https://www.linkedin.com/in/shrajal-patel-b1566b375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "hover:text-primary" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@SavvyShrajal", color: "hover:text-red-500" },
  { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/+918959863777", color: "hover:text-green-500" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "savvyshrajal@gmail.com", href: "mailto:savvyshrajal@gmail.com" },
  { icon: Phone, label: "Phone", value: "+9189 5986 3777", href: "tel:+918959863777" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to bring your vision to life? Get in touch!
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className={`glass p-6 rounded-2xl glow-hover ${social.color} transition-colors duration-300`}
            >
              <social.icon size={40} />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
              >
                <div className="p-3 rounded-full bg-gradient-neon">
                  <contact.icon size={24} className="text-background" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">{contact.label}</div>
                  <div className="font-semibold text-foreground">{contact.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 text-muted-foreground"
        >
          <p>© 2024 Creative Editor. All rights reserved.</p>
          <p className="mt-2">Built with passion and creativity ✨</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
