import InterestCalculator from "@/components/calculator/InterestCalculator";
import { AlertCircle, MessageCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Alert className="bg-cyan-500/10 border-cyan-500">
        <AlertCircle className="h-4 w-4 text-cyan-400" />
        <AlertDescription className="text-cyan-400">
          This is a fan-made calculator and is not officially affiliated with EXP.
        </AlertDescription>
      </Alert>
      
      <Alert className="bg-cyan-500/10 border-cyan-500">
        <AlertCircle className="h-4 w-4 text-cyan-400" />
        <AlertDescription className="text-cyan-400">
          This website was designed and created by @4.fizz on discord, suggestions for this website can be sent directly via discord.
        </AlertDescription>
      </Alert>
      
      <InterestCalculator />
      
      <div className="border border-cyan-500 rounded-lg p-4 bg-black">
        <div className="flex items-start gap-3">
          <MessageCircle className="h-5 w-5 text-cyan-500 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-cyan-500 mb-2">EXP Discord Community</h3>
            <p className="text-gray-300 mb-3">
              This website was designed for EXP's discord server to help people calculate their interest fast, accurately, and simply.
            </p>
            <a 
              href="https://discord.gg/gems" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Join Discord Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
