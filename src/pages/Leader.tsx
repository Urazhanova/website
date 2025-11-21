import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Badge from "@/components/Badge";
import ContactModal from "@/components/ContactModal";
import { ArrowLeft, Quote, MapPin, Globe, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import coachPortrait from "@/assets/coach-portrait.jpg";
import speakerStage from "@/assets/speaker-stage.jpg";
import heroSpeaker from "@/assets/hero-speaker.jpg";

const Leader = () => {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/10">
            {/* Navigation */}


            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={coachPortrait}
                        alt="Nikita Menshov"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-6">
                    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-semibold tracking-wide uppercase mb-6">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Lead Trainer</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold text-white font-heading tracking-tight mb-6 leading-[1.1]">
                            Nikita Menshov
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                            "The best leaders don't have all the answers. They have better questions."
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="container mx-auto px-4 lg:px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-lg lg:text-xl text-body leading-relaxed space-y-8">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                            I've spent seven years trying to answer one question: <span className="font-bold text-heading">What separates leaders who freeze under pressure from those who don't?</span>
                        </p>
                        <p>
                            Here's what I've learned—it's not about having better answers. It's about how your mind processes uncertainty in real-time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visual Mosaic */}
            <section className="py-12 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                        <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group shadow-soft hover:shadow-soft-lg transition-all duration-500">
                            <img src={speakerStage} alt="Speaking on stage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group shadow-soft hover:shadow-soft-lg transition-all duration-500">
                            <img src={heroSpeaker} alt="Workshop session" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group shadow-soft hover:shadow-soft-lg transition-all duration-500">
                            <img src={coachPortrait} alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center group hover:bg-primary/20 transition-colors duration-500">
                            <Quote className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem & Solution */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-lg text-body leading-relaxed">
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading font-heading mb-8">
                                Beyond Scripts
                            </h2>
                            <p>
                                Most executive training gives you frameworks and scripts. That's fine when you have time to think. But board meetings don't go as planned. Crises don't wait. Stakeholders don't follow your deck.
                            </p>
                            <div className="p-6 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
                                <p className="font-medium text-red-900">
                                    The moments that define your leadership? Those happen in the space between what you prepared and what actually unfolds.
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-transparent rounded-3xl -z-10 transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                            <Card className="p-8 lg:p-10 border-none shadow-xl bg-white hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-bold text-heading mb-6">My Approach</h3>
                                <p className="text-lg text-body mb-6">
                                    I create scenarios where you can't rely on preparation—you have to rely on instinct.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span className="font-medium">Real actors</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span className="font-medium">Real pressure</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span className="font-medium">Real-time decisions</span>
                                    </li>
                                </ul>
                                <p className="mt-8 text-muted-foreground italic">
                                    "No scripts for them, no scripts for you."
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Experience - Marquee */}
            <section className="py-20 bg-heading text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="container mx-auto px-4 lg:px-6 mb-12 relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Global Experience</h2>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        I've been doing this across Russia, Cyprus, Southeast Asia, now Dubai. Always with the same focus: senior leadership at organizations facing genuine complexity.
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative flex overflow-hidden group py-8 bg-heading">
                    <div className="flex animate-marquee whitespace-nowrap gap-6 pr-6 min-w-full shrink-0">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-6">
                                <img src={speakerStage} className="h-64 w-96 object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                                <img src={heroSpeaker} className="h-64 w-96 object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                                <img src={coachPortrait} className="h-64 w-96 object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                            </div>
                        ))}
                    </div>
                    <div className="flex animate-marquee whitespace-nowrap gap-6 pr-6 min-w-full shrink-0" aria-hidden="true">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-6">
                                <img src={speakerStage} className="h-64 w-96 object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                                <img src={heroSpeaker} className="h-64 w-96 object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                                <img src={coachPortrait} className="h-64 w-96 object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 lg:px-6 mt-12 grid md:grid-cols-3 gap-8 text-center relative z-10">
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-bold mb-2 text-white">International Reach</h3>
                        <p className="text-sm text-gray-300">Russia, Cyprus, SE Asia, Dubai</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-bold mb-2 text-white">C-Suite Focus</h3>
                        <p className="text-sm text-gray-300">Executives facing genuine complexity</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-bold mb-2 text-white">No Mid-Management</h3>
                        <p className="text-sm text-gray-300">Exclusive to senior leadership</p>
                    </div>
                </div>
            </section>

            {/* Philosophy & CTA */}
            <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-4 lg:px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-bold text-heading font-heading mb-12">
                            What I Believe
                        </h2>
                        <p className="text-2xl lg:text-3xl font-medium text-heading leading-tight mb-16">
                            "The best leaders don't have all the answers. They have better questions, faster pattern recognition, and the ability to project certainty even when the path isn't clear."
                        </p>

                        <div className="inline-block relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <ContactModal>
                                <Button size="lg" className="relative bg-white text-heading hover:bg-gray-50 rounded-full h-16 px-12 text-xl font-bold shadow-xl border border-gray-100 hover:scale-105 transition-transform duration-300">
                                    That's what we train
                                </Button>
                            </ContactModal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-heading font-bold font-heading text-xl tracking-tight">
                        Nikita <span className="text-primary">Menshov</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © 2025 Executive Clarity. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Leader;
