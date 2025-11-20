import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Badge from "@/components/Badge";
import HandDrawnUnderline from "@/components/HandDrawnUnderline";
import coachPortrait from "@/assets/coach-portrait.jpg";
import speakerStage from "@/assets/speaker-stage.jpg";
import heroSpeaker from "@/assets/hero-speaker.jpg";
import { ArrowRight, CheckCircle2, Star, Mic, Users, TrendingUp, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10 selection:text-primary">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column: Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm text-primary text-xs lg:text-sm font-semibold tracking-wide uppercase">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-current" />
                <span>Premium Public Speaking Coach</span>
              </div>

              <h1 className="text-4xl lg:text-7xl font-bold text-heading leading-[1.1] tracking-tight font-heading">
                MASTER THE ART OF <br />
                <span className="relative inline-block text-primary">
                  PUBLIC SPEAKING
                  <span className="absolute -bottom-2 lg:-bottom-3 left-0 w-full text-primary opacity-80">
                    <HandDrawnUnderline />
                  </span>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-body leading-relaxed max-w-xl">
                Command the stage with confidence. Transform your communication skills and lead with authority in every interaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 pt-2 lg:pt-4">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-lg h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
                  Book a Consultation
                </Button>
                <Button variant="outline" className="bg-white border-primary text-primary hover:bg-primary/5 rounded-lg h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg font-semibold">
                  View Methodology
                </Button>
              </div>
            </div>

            {/* Right Column: Photo */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-full">
                <div className="absolute inset-0 bg-secondary blur-[40px] lg:blur-[60px] rounded-full opacity-60 -z-10 transform translate-x-6 translate-y-6 lg:translate-x-10 lg:translate-y-10"></div>
                <img
                  src={coachPortrait}
                  alt="Public Speaking Coach"
                  className="w-full h-auto object-cover rounded-2xl shadow-soft-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mic, title: "Stage Presence", desc: "Own the room instantly" },
              { icon: Users, title: "Audience Connection", desc: "Engage deeply & authentically" },
              { icon: TrendingUp, title: "Impactful Storytelling", desc: "Make your message stick" },
              { icon: Star, title: "Executive Authority", desc: "Lead with confidence" }
            ].map((item, i) => (
              <div key={i} className="p-6 lg:p-8 bg-white rounded-2xl shadow-soft border border-gray-50 text-center hover:shadow-soft-lg transition-shadow duration-300 group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-heading mb-2 font-heading">{item.title}</h3>
                <p className="text-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Product / Session Section */}
      <section className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-center">
            {/* Column 1: Text */}
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-heading font-heading leading-tight">
                TRANSFORM YOUR <br />
                <span className="text-primary">COMMUNICATION</span>
              </h2>
              <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-body leading-relaxed">
                <p>
                  Public speaking isn't just about words—it's about energy, structure, and connection. Whether you're addressing a board of directors or a stadium of thousands, the principles remain the same.
                </p>
                <p>
                  My coaching methodology breaks down the complex art of performance into actionable, trainable skills that you can apply immediately.
                </p>
                <Button variant="link" className="text-primary font-bold text-base lg:text-lg p-0 h-auto hover:no-underline group">
                  Learn more about the process
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Column 2: Photo */}
            <div className="relative h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden shadow-soft-lg group">
              <img
                src={speakerStage}
                alt="Speaker on stage"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Column 3: Info Cards */}
            <div className="space-y-6">
              <Card className="p-6 lg:p-8 bg-white border-none shadow-soft rounded-2xl hover:shadow-soft-lg transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 lg:mb-4 font-heading">Individual Coaching</h3>
                <ul className="space-y-2 lg:space-y-3">
                  {[
                    "Personalized strategy",
                    "Video analysis & feedback",
                    "Real-time practice",
                    "Crisis communication prep"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-body font-medium text-sm lg:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 lg:p-8 bg-white border-none shadow-soft rounded-2xl hover:shadow-soft-lg transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 lg:mb-4 font-heading">Corporate Workshops</h3>
                <ul className="space-y-2 lg:space-y-3">
                  {[
                    "Team presentation skills",
                    "Leadership presence",
                    "Storytelling for sales",
                    "Executive alignment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-body font-medium text-sm lg:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Real Applications / Context */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading font-heading mb-4 lg:mb-6">Where It Matters</h2>
            <p className="text-base lg:text-lg text-body">
              These skills translate directly to high-stakes environments where clarity and confidence are non-negotiable.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            <Badge>Keynote Speeches</Badge>
            <Badge>Board Meetings</Badge>
            <Badge>Investor Pitches</Badge>
            <Badge>Media Interviews</Badge>
            <Badge>Team Leadership</Badge>
            <Badge>Crisis Response</Badge>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading font-heading mb-4">Success Stories</h2>
            <p className="text-base lg:text-lg text-body max-w-2xl mx-auto">
              See how leaders and executives have transformed their public speaking skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card key={item} className="overflow-hidden border-none shadow-soft hover:shadow-soft-lg transition-all duration-300 group cursor-pointer">
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 lg:w-6 lg:h-6 text-primary fill-primary ml-1" />
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-body text-sm mb-4 line-clamp-3">
                    "The coaching sessions were transformative. I gained the confidence to speak in front of large audiences without fear."
                  </p>
                  <div>
                    <p className="font-bold text-heading text-sm">Client Name {item}</p>
                    <p className="text-xs text-muted-foreground">Executive Role, Company</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-6xl font-bold text-heading font-heading mb-6 lg:mb-8 tracking-tight">
            Ready to Speak with <br />
            <span className="text-primary">Impact?</span>
          </h2>
          <p className="text-lg lg:text-xl text-body mb-8 lg:mb-10 max-w-2xl mx-auto">
            Join the ranks of top executives who have transformed their communication style.
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90 rounded-lg h-14 lg:h-16 px-8 lg:px-12 text-lg lg:text-xl font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
            Start Your Transformation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 lg:py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-heading font-bold font-heading text-xl">
            EXECUTIVE<span className="text-primary">CLARITY</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Executive Clarity. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
