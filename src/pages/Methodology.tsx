import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    ArrowLeft,
    CheckCircle2,
    Shield,
    Compass,
    Scale,
    Zap,
    Crown,
    Brain,
    Layers,
    Clock,
    Target,
    Users,
    TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Methodology = () => {
    const capabilities = [
        {
            icon: Shield,
            title: "Adaptive Acceptance",
            description: "The ability to integrate unexpected information instantly and redirect the conversation without losing your position.",
            where: "tough questions, pushback, disrupted plans.",
            result: "you don't get thrown off — you take the lead."
        },
        {
            icon: Compass,
            title: "Contextual Mastery",
            description: "Constructing a confident narrative even when the information is incomplete or ambiguous.",
            where: "crises, uncertainty, investor and media communications.",
            result: "you shape perception instead of reacting to it."
        },
        {
            icon: Scale,
            title: "Status Intelligence",
            description: "Deliberate modulation of your authority — when to lead firmly, when to soften, when to collaborate.",
            where: "negotiations, boardroom dynamics, press interactions.",
            result: "you increase influence without pressure or dominance."
        },
        {
            icon: Zap,
            title: "Emotional Conversion",
            description: "Transforming stress and tension into clarity, focus, and controlled communication.",
            where: "high-stakes decisions, crisis leadership, moments of scrutiny.",
            result: "a composed presence that reassures more effectively than any script."
        },
        {
            icon: Crown,
            title: "Authentic Command",
            description: "Confidence that doesn't feel performed — it feels real, grounded, and trustworthy.",
            where: "team leadership, stakeholder trust, executive presence.",
            result: "people believe you not because you say the right words, but because you are the right presence."
        }
    ];

    const trainingScenarios = [
        "hostile or challenging Q&A",
        "unexpected boardroom tensions",
        "crisis-driven media moments",
        "stakeholder resistance",
        "organizational pivots"
    ];

    const whyItWorks = [
        {
            icon: Brain,
            title: "Cognitive, not behavioral",
            description: "We don't prepare you for specific situations. We build a strategic way of thinking that works in any situation."
        },
        {
            icon: Layers,
            title: "Capabilities, not scripts",
            description: "You develop skills that make pre-planned answers unnecessary."
        },
        {
            icon: Clock,
            title: "Immediate, not theoretical",
            description: "No hypothetical case studies — only what you're actually facing now."
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/10">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="container relative mx-auto px-4 lg:px-6">
                    <Button asChild variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary transition-colors">
                        <Link to="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>
                    </Button>

                    <div className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                            Our Approach
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-heading font-heading mb-8 tracking-tight">
                            Methodology
                        </h1>
                        <h2 className="text-2xl lg:text-4xl font-bold text-primary font-heading mb-8 leading-tight">
                            Executive Communication <br className="hidden lg:block" />
                            Under Pressure
                        </h2>
                        <div className="space-y-6 text-lg lg:text-xl text-body leading-relaxed max-w-3xl border-l-4 border-primary/20 pl-6">
                            <p>
                                We develop not scripted responses, but the mental and emotional capabilities that allow leaders to think and act clearly under pressure, uncertainty, and resistance.
                            </p>
                            <p className="font-semibold text-heading">
                                This is not performance training.
                                <span className="block text-primary mt-1">This is strategic behavior in the moment.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Our Approach Different */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading font-heading mb-6">
                                What Makes Our Approach Different
                            </h2>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg lg:text-xl text-body">
                                <div className="bg-red-50 text-red-800 px-6 py-3 rounded-lg border border-red-100">
                                    Most programs teach <span className="font-bold">what to say</span>
                                </div>
                                <ArrowLeft className="hidden md:block w-6 h-6 text-muted-foreground rotate-180" />
                                <ArrowLeft className="md:hidden w-6 h-6 text-muted-foreground -rotate-90" />
                                <div className="bg-blue-50 text-primary px-6 py-3 rounded-lg border border-blue-100 shadow-sm">
                                    We train <span className="font-bold">how you think</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl -z-10 transform rotate-2"></div>
                                <Card className="p-8 lg:p-10 bg-white border-border shadow-lg">
                                    <p className="text-xl font-bold text-heading mb-8">
                                        You become the kind of leader who:
                                    </p>
                                    <ul className="space-y-5">
                                        {[
                                            "does not freeze under pressure",
                                            "shapes the dynamics of the room",
                                            "creates context even when none is provided",
                                            "stays emotionally present but not reactive",
                                            "doesn't perform authority — radiates it"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-body text-lg group">
                                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                <span className="group-hover:text-heading transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </div>
                            <div className="space-y-8 lg:pl-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-heading mb-2">Precision Under Fire</h3>
                                        <p className="text-body leading-relaxed">
                                            When the stakes are high and information is unclear, standard scripts fail. We give you the cognitive tools to navigate ambiguity with precision.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-heading mb-2">Commanding Presence</h3>
                                        <p className="text-body leading-relaxed">
                                            True authority isn't about being the loudest. It's about emotional control and strategic modulation that naturally draws others to follow.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-heading mb-2">Sustainable Influence</h3>
                                        <p className="text-body leading-relaxed">
                                            Move beyond transactional interactions to build deep, lasting trust with stakeholders, teams, and investors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Five Capabilities */}
            <section className="py-20 lg:py-32 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-heading font-heading mb-6">
                                The Five Capabilities
                            </h2>
                            <p className="text-xl text-body max-w-2xl mx-auto">
                                Strategic improvisation isn't magic. It's a set of five learnable, masterable skills.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {capabilities.map((capability, index) => (
                                <Card key={index} className={`p-8 bg-white border-none shadow-sm hover:shadow-xl transition-all duration-300 group ${index === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}>
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <capability.icon className="w-7 h-7" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-heading font-heading mb-3 group-hover:text-primary transition-colors">
                                                {capability.title}
                                            </h3>
                                            <p className="text-body mb-6 leading-relaxed">
                                                {capability.description}
                                            </p>
                                            <div className="space-y-3 pt-6 border-t border-gray-100">
                                                <div className="flex gap-2 text-sm">
                                                    <span className="font-semibold text-heading whitespace-nowrap">Where it matters:</span>
                                                    <span className="text-muted-foreground">{capability.where}</span>
                                                </div>
                                                <div className="flex gap-2 text-sm">
                                                    <span className="font-semibold text-primary whitespace-nowrap">Result:</span>
                                                    <span className="text-heading font-medium">{capability.result}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How the Training Works */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-heading font-heading mb-12 text-center">
                            Real-World Application
                        </h2>

                        <div className="bg-secondary/20 rounded-3xl p-8 lg:p-12 border border-secondary/50">
                            <div className="text-center mb-10">
                                <p className="text-xl text-heading font-medium mb-6">
                                    Every session is built around your real scenarios:
                                </p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {trainingScenarios.map((scenario, i) => (
                                        <span key={i} className="px-4 py-2 bg-white text-primary font-medium rounded-full shadow-sm border border-blue-100">
                                            {scenario}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Card className="p-8 bg-white border-none shadow-md text-center max-w-2xl mx-auto">
                                <p className="text-xl text-body leading-relaxed">
                                    You practice <span className="font-bold text-heading">rapid-response patterns</span> in a confidential environment, then apply them immediately in your current role.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Works */}
            <section className="py-20 lg:py-32 bg-heading text-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
                            Why This Works
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {whyItWorks.map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="mb-6 text-primary-foreground">
                                        <item.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Result */}
            <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-heading font-heading mb-8">
                            The Result
                        </h2>

                        <div className="space-y-8 text-xl lg:text-2xl text-body leading-relaxed mb-12">
                            <p>
                                You move from prepared confidence to <span className="font-bold text-primary">adaptive authority</span>.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                The ability to command the room, guide the interaction, and make decisions even when conditions are unstable and information is incomplete.
                            </p>
                        </div>

                        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100">
                            <div className="bg-white rounded-xl px-8 py-6 shadow-sm">
                                <p className="font-bold text-heading text-lg">
                                    This is not improvisation as performance.<br />
                                    <span className="text-primary">This is improvisation as a strategic leadership advantage.</span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-16">
                            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full h-16 px-12 text-xl font-bold shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-2xl">
                                <Link to="/">
                                    Start Your Transformation
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-heading font-bold font-heading text-xl tracking-tight">
                        EXECUTIVE<span className="text-primary">CLARITY</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © 2025 Executive Clarity. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Methodology;
