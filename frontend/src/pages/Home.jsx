import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, ExternalLink, Briefcase, Heart, TrendingUp, Users, BarChart3, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';

const Home = () => {
  const { language, t } = useLanguage();
  const [fogOpacity, setFogOpacity] = useState(1);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const portraitImage = 'Aleksei Bespechnyi.jpeg';

  useEffect(() => {
    const timer = setTimeout(() => {
      setFogOpacity(0);
      setImageOpacity(1);
    }, 500);

    const textTimer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  const handleMakeOffer = () => {
    const subject = language === 'de'
      ? 'Angebot für Aleksei Bespechnyi – International Sales / Business Development'
      : 'Opportunity for Aleksei Bespechnyi – International Sales / Business Development';
    const body = language === 'de'
      ? 'Hallo Aleksei,%0D%0A%0D%0Awir haben Ihr Profil gesehen und möchten Ihnen folgende Position / Projekt anbieten:%0D%0A%0D%0A'
      : 'Hi Aleksei,%0D%0A%0D%0AWe saw your profile and would like to offer you the following position / project:%0D%0A%0D%0A';
    window.location.href = `mailto:7css77@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const skills = [
    'International Sales',
    'Business Development',
    'CRM & Cold Outreach',
    'Market Research',
    'Marketing Automation',
    'SEO & Content',
    'Meta Ads',
    'Analytics'
  ];

  const metrics = {
    organicSocial: {
      label: 'Organic Social',
      sessions: { before: 25, after: 149 },
      engagement: { before: 60.0, after: 80.5 },
      growthSessions: 496,
      growthEngagement: 20.5
    },
    organicSearch: {
      label: 'Organic Search',
      sessions: { before: 383, after: 858 },
      engagement: { before: 59.0, after: 70.6 },
      growthSessions: 124,
      growthEngagement: 11.6
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Portrait Image */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              <img
                src={portraitImage}
                alt="Aleksei Bespechnyi – International Sales & Business Development, Linz, Österreich"
                className="w-96 h-96 object-cover object-top rounded-3xl shadow-2xl shadow-pink-500/20 transition-all duration-500"
                style={{
                  filter: `blur(${fogOpacity * 8}px)`,
                  opacity: imageOpacity,
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 via-gray-300/30 to-transparent transition-opacity duration-2000 pointer-events-none"
                style={{ opacity: fogOpacity }}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-2xl animate-pulse" />
            </div>
          </div>

          {/* Hero Text */}
          <div
            className={`text-center space-y-4 mb-12 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-xl md:text-3xl font-bold text-white tracking-wider">
              {language === 'de'
                ? 'International Sales & Business Development'
                : 'International Sales & Business Development'}
            </h1>
            <p className="text-lg md:text-xl text-white font-medium max-w-2xl mx-auto">
              {language === 'de'
                ? 'Bewiesene Ergebnisse: +496% Organic Social Reichweite, +124% Organic Search Traffic. Marketing als Turbo – Vertrieb als Motor.'
                : 'Proven results: +496% Organic Social reach, +124% Organic Search traffic. Marketing as the turbo – sales as the engine.'}
            </p>
          </div>

          {/* Contact Info */}
          <div
            className={`text-center mb-8 space-y-2 px-4 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white">Aleksei Bespechnyi</h2>
            <p className="text-base md:text-lg text-gray-300 font-medium">
              {language === 'de'
                ? 'Bachelor Global Sales & Marketing Student (letztes Semester, FH Steyr)'
                : 'Bachelor Global Sales & Marketing Student (final semester, FH Steyr)'}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 text-gray-300 pt-2 space-y-1 md:space-y-0 text-sm md:text-base">
              <a href="tel:+4368181411499" className="hover:text-pink-400 transition-colors duration-200">
                +43 681 81411499
              </a>
              <span className="hidden md:inline text-gray-500">•</span>
              <a href="mailto:7css77@gmail.com?subject=International%20Sales%20Zusammenarbeit" className="hover:text-pink-400 transition-colors duration-200">
                7css77@gmail.com
              </a>
              <span className="hidden md:inline text-gray-500">•</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Linz,Austria" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-200">
                Linz/Steyr/Wien/Salzburg
              </a>
            </div>
          </div>

          {/* Skills Block */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800/80 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium hover:bg-pink-500/20 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`flex justify-center mb-12 transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Button
              onClick={handleMakeOffer}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 border-0"
            >
              <Mail className="w-6 h-6 mr-3" />
              {language === 'de' ? 'Jetzt Angebot senden' : 'Send an offer'}
            </Button>
          </div>

          {/* PHILOSOPHIE / MINDSET */}
          <div
            className={`bg-slate-900/50 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl text-white font-bold">
                {language === 'de' ? 'Meine Denkweise' : 'My Mindset'}
              </h3>
            </div>
            <div className="text-left space-y-4 text-gray-300 leading-relaxed">
              <p>
                {language === 'de'
                  ? 'Marketing kann Aufmerksamkeit erregen. Aber echter Erfolg entsteht, wenn Aufmerksamkeit in Kunden und Kunden in Umsatz verwandelt werden. Während meines Praktikums habe ich den gesamten Funnel optimiert und die Conversion verbessert – das war der Turbo. Mein eigentlicher Fokus liegt jedoch auf dem Motor: internationalem Vertrieb und Geschäftsentwicklung.'
                  : 'Marketing can attract attention. But real success happens when attention turns into clients, and clients into revenue. During my internship I optimized the entire funnel and improved conversion – that was the turbo. But my core focus is on the engine: international sales and business development.'}
              </p>
              <p>
                {language === 'de'
                  ? 'Ich finde und eröffne neue Märkte, baue Gespräche mit internationalen Kunden auf, verstehe ihre Bedürfnisse und passe das Angebot so an, dass aus Interesse konkreter Umsatz wird. Marketing ist für mich dabei kein Selbstzweck, sondern ein strategisches Werkzeug zur Kundenakquise.'
                  : 'I find and open new markets, build conversations with international clients, understand their needs and adapt the offer so that interest turns into concrete revenue. For me, marketing is not an end in itself, but a strategic tool for client acquisition.'}
              </p>
            </div>
          </div>

          {/* Letzte Erfahrung (Partybus) */}
          <div
            className={`bg-slate-900/50 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-2xl text-white font-bold">
                {language === 'de' ? 'Letzte Erfahrung' : 'Recent Experience'}
              </h3>
            </div>

            <div className="mb-6 flex justify-center">
              <img
                src="schoolbus.jpeg"
                alt="Partybus von partyboss.at"
                className="w-full max-w-2xl h-72 object-cover rounded-xl shadow-lg shadow-pink-500/20"
                style={{ objectPosition: 'center 60%' }}
              />
            </div>

            {/* Metrics Dashboard */}
            <div className="mb-6 space-y-4">
              <h4 className="text-pink-400 font-semibold text-center flex items-center justify-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                {language === 'de' ? 'Ergebnisse in Zahlen (Google Analytics)' : 'Results in Numbers (Google Analytics)'}
              </h4>

              {/* Organic Social */}
              <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-white font-semibold">Organic Social</span>
                  </div>
                  <div className="flex items-center bg-green-500/20 px-3 py-1 rounded-full">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-green-400 font-bold">+{metrics.organicSocial.growthSessions}%</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-3">
                  {language === 'de' ? 'Wachstum der Sitzungen (Nov–Jan → Feb–Mai)' : 'Session growth (Nov–Jan → Feb–May)'}
                </p>
                <div className="flex items-end space-x-4 mb-3">
                  <div className="flex-1">
                    <div className="text-gray-500 text-xs mb-1">{language === 'de' ? 'Vorher' : 'Before'}</div>
                    <div className="bg-gray-700 rounded-lg h-10 flex items-center justify-center">
                      <span className="text-white font-bold">{metrics.organicSocial.sessions.before}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-500 text-xs mb-1">{language === 'de' ? 'Nachher' : 'After'}</div>
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg h-10 flex items-center justify-center">
                      <span className="text-white font-bold">{metrics.organicSocial.sessions.after}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm bg-slate-900/50 rounded-lg p-2">
                  <span className="text-gray-400">{language === 'de' ? 'Engagement-Rate:' : 'Engagement rate:'}</span>
                  <span className="text-green-400 font-medium">
                    {metrics.organicSocial.engagement.before}% → {metrics.organicSocial.engagement.after}%
                    <span className="text-xs ml-1">(+{metrics.organicSocial.growthEngagement}%)</span>
                  </span>
                </div>
              </div>

              {/* Organic Search */}
              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-400" />
                    <span className="text-white font-semibold">Organic Search</span>
                  </div>
                  <div className="flex items-center bg-green-500/20 px-3 py-1 rounded-full">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-green-400 font-bold">+{metrics.organicSearch.growthSessions}%</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-3">
                  {language === 'de' ? 'Wachstum der Sitzungen (Nov–Jan → Feb–Mai)' : 'Session growth (Nov–Jan → Feb–May)'}
                </p>
                <div className="flex items-end space-x-4 mb-3">
                  <div className="flex-1">
                    <div className="text-gray-500 text-xs mb-1">{language === 'de' ? 'Vorher' : 'Before'}</div>
                    <div className="bg-gray-700 rounded-lg h-10 flex items-center justify-center">
                      <span className="text-white font-bold">{metrics.organicSearch.sessions.before}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-500 text-xs mb-1">{language === 'de' ? 'Nachher' : 'After'}</div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg h-10 flex items-center justify-center">
                      <span className="text-white font-bold">{metrics.organicSearch.sessions.after}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm bg-slate-900/50 rounded-lg p-2">
                  <span className="text-gray-400">{language === 'de' ? 'Engagement-Rate:' : 'Engagement rate:'}</span>
                  <span className="text-green-400 font-medium">
                    {metrics.organicSearch.engagement.before}% → {metrics.organicSearch.engagement.after}%
                    <span className="text-xs ml-1">(+{metrics.organicSearch.growthEngagement}%)</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="text-left space-y-4">
              <p className="text-gray-300 leading-relaxed">
                {language === 'de'
                  ? 'Von Februar bis Mai 2026 verstärkte ich das Team der Roll Out Innovation GmbH – Betreiber der Plattform partyboss.at. Meine Aufgabe: den Vertrieb und die digitale Sichtbarkeit der neuen Marke aufbauen. Durch gezielte Social-Media-Strategien und SEO-Optimierung konnte ich die organische Reichweite signifikant steigern und die Engagement-Raten in allen Kanälen verbessern.'
                  : 'From February to May 2026 I strengthened the team of Roll Out Innovation GmbH - operator of the platform partyboss.at. My task: to build up the sales and digital visibility of the new brand. Through targeted social media strategies and SEO optimization, I significantly increased organic reach and improved engagement rates across all channels.'}
              </p>

              {/* Testimonial */}
              <div className="bg-slate-800/50 border border-gray-600/30 rounded-xl p-5">
                <p className="text-gray-300 text-sm italic leading-relaxed mb-3">
                  {language === 'de'
                    ? '„Aleksei hat in nur drei Monaten bewiesen, dass er digitales Marketing versteht. Die Zahlen sprechen für sich: fast 500% mehr organische Sichtbarkeit und deutlich höhere Interaktionsraten. Er arbeitet selbstständig, denkt strategisch und liefert Ergebnisse. Genau die Art von Mitarbeiter, die wir gesucht haben."'
                    : '„Aleksei proved in just three months that he understands digital marketing. The numbers speak for themselves: almost 500% more organic visibility and significantly higher interaction rates. He works independently, thinks strategically, and delivers results. Exactly the kind of employee we were looking for."'}
                </p>
                <div className="border-t border-gray-700 pt-3">
                  <p className="text-white text-sm font-semibold">Sascha Reischl</p>
                  <p className="text-gray-500 text-xs">Geschäftsführer, Roll Out Innovation GmbH</p>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <a
                  href="https://partyboss.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/20"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {language === 'de' ? 'Besuchen Sie partyboss.at' : 'Visit partyboss.at'}
                </a>
              </div>
            </div>
          </div>

          {/* Was ich suche */}
          <div
            className={`bg-slate-900/50 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl text-white font-bold">
                {language === 'de' ? 'Wonach ich suche' : 'What I’m looking for'}
              </h3>
            </div>
            <div className="text-left space-y-4 text-gray-300">
              <p>
                {language === 'de'
                  ? 'Ich suche ein Unternehmen, das wirklich international wachsen will – und versteht, dass Vertrieb mehr ist als nur ein CRM zu befüllen. Ich biete eine Kombination aus analytischem Marketing-Denken und praktischer Vertriebserfahrung: jemanden, der aus Aufmerksamkeit Umsatz macht.'
                  : 'I’m looking for a company that genuinely wants to grow internationally – and understands that sales is more than just filling a CRM. I offer a combination of analytical marketing thinking and hands‑on sales experience: someone who turns attention into revenue.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-3">
                  <span className="text-green-300 font-semibold text-sm">🌍 {language === 'de' ? 'Internationaler Vertrieb' : 'International Sales'}</span>
                </div>
                <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-3">
                  <span className="text-green-300 font-semibold text-sm">📈 {language === 'de' ? 'Business Development' : 'Business Development'}</span>
                </div>
                <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-3">
                  <span className="text-green-300 font-semibold text-sm">🤝 {language === 'de' ? 'Internationale Projekte' : 'International Projects'}</span>
                </div>
                <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-3">
                  <span className="text-green-300 font-semibold text-sm">🎯 {language === 'de' ? 'Kundenakquise' : 'Client Acquisition'}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 pt-2">
                {language === 'de'
                  ? 'Derzeit offen für spannende Angebote und freue mich auf ein persönliches Gespräch.'
                  : 'Currently open for exciting opportunities and looking forward to a personal conversation.'}
              </p>
            </div>
          </div>

          {/* Social Projects Section */}
          <div
            className={`bg-slate-900/50 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl text-white font-bold">
                {language === 'de' ? 'Digital Marketing für soziale Projekte' : 'Digital Marketing for Social Projects'}
              </h3>
            </div>

            <div className="text-left space-y-4">
              <p className="text-gray-300 leading-relaxed">
                {language === 'de'
                  ? 'Neben meiner Tätigkeit bei partyboss.at unterstütze ich die Roll Out Innovation GmbH bei der digitalen Sichtbarkeit ihrer sozialen Initiativen unter der Marke Zukunft Jugend.'
                  : 'In addition to my work at partyboss.at, I support Roll Out Innovation GmbH in building digital visibility for their social initiatives under the Zukunft Jugend brand.'}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {language === 'de'
                  ? 'Meine Aufgabe ist es, die Reichweite der Plattformen zukunft-jugend.at und sascha-reischl.at/veranstaltungen zu erhöhen. Ich analysiere die Zielgruppen (Jugendliche, Gemeinden) und setze Maßnahmen im Bereich Content Marketing & SEO um, um die innovativen Jugendprojekte wie MobileJULEI und DriveJUZ bekannter zu machen.'
                  : 'My task is to increase the reach of the platforms zukunft-jugend.at and sascha-reischl.at/veranstaltungen. I analyze target audiences (youth, municipalities) and implement content marketing & SEO strategies to raise awareness for innovative youth projects like MobileJULEI and DriveJUZ.'}
              </p>

              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-4">
                <p className="text-purple-300 text-sm italic">
                  {language === 'de'
                    ? 'Diese Arbeit gibt mir die einmalige Chance, meine Marketing-Kenntnisse in einem sinnstiftenden, sozialen Umfeld anzuwenden.'
                    : 'This work gives me a unique opportunity to apply my marketing skills in a meaningful, social environment.'}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                  href="https://zukunft-jugend.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  zukunft-jugend.at
                </a>
                <a
                  href="https://sascha-reischl.at/veranstaltungen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  sascha-reischl.at
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavigationButtons />
    </div>
  );
};

export default Home;