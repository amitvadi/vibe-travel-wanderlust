import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Clock, Heart, Zap, Coffee, Mountain, Camera, Users, User } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const TravelOnboarding = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    destination: '',
    dates: { start: undefined as Date | undefined, end: undefined as Date | undefined },
    duration: '',
    travelStyle: '',
    groupType: ''
  });

  const destinations = [
    { name: 'Tokyo, Japan', emoji: '🏯' },
    { name: 'Paris, France', emoji: '🗼' },
    { name: 'Bali, Indonesia', emoji: '🏝️' },
    { name: 'New York, USA', emoji: '🗽' },
    { name: 'Barcelona, Spain', emoji: '🏛️' },
    { name: 'Other destination', emoji: '🌍' }
  ];

  const durations = [
    { label: 'Weekend (2-3 days)', value: 'weekend', icon: Coffee },
    { label: 'Short trip (4-7 days)', value: 'short', icon: Clock },
    { label: 'Extended stay (1-2 weeks)', value: 'extended', icon: Calendar },
    { label: 'Long adventure (3+ weeks)', value: 'long', icon: Mountain }
  ];

  const travelStyles = [
    { label: 'Comfort & Luxury', value: 'luxury', icon: Heart, desc: 'Fine dining, premium stays' },
    { label: 'Active & Adventure', value: 'active', icon: Zap, desc: 'Hiking, sports, outdoor activities' },
    { label: 'Cultural Explorer', value: 'cultural', icon: Camera, desc: 'Museums, local experiences' },
    { label: 'Relaxed & Chill', value: 'relaxed', icon: Coffee, desc: 'Beaches, spas, leisure' }
  ];

  const groupTypes = [
    { label: 'Solo Travel', value: 'solo', icon: User },
    { label: 'Couple', value: 'couple', icon: Heart },
    { label: 'Family', value: 'family', icon: Users },
    { label: 'Friends Group', value: 'friends', icon: Users }
  ];

  const handleSelection = (key: string, value: any) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selections.destination.trim().length > 0;
      case 2: return selections.dates.start && selections.dates.end;
      case 3: return selections.duration;
      case 4: return selections.travelStyle;
      case 5: return selections.groupType;
      default: return false;
    }
  };

  const handleFinish = () => {
    console.log('Travel preferences:', selections);
    // TODO: Navigate to discover page with filters
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Step {step} of 5</span>
          <span className="text-sm text-gray-600">{Math.round((step / 5) * 100)}% complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-sunset h-2 rounded-full transition-all duration-500"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="bg-white rounded-2xl p-8 shadow-lg min-h-[400px] flex flex-col justify-between">
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Where do you want to go?</h2>
            <p className="text-gray-600 text-center mb-8">Enter your dream destination</p>
            
            <div className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="e.g. Tokyo, Paris, Bali..."
                value={selections.destination}
                onChange={(e) => handleSelection('destination', e.target.value)}
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-sunset-500 focus:ring-0"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">When are you traveling?</h2>
            <p className="text-gray-600 text-center mb-8">Select your travel dates</p>
            
            <div className="flex justify-center gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-64 justify-start text-left font-normal",
                      !selections.dates.start && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {selections.dates.start ? format(selections.dates.start, "PPP") : "Start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={selections.dates.start}
                    onSelect={(date) => handleSelection('dates', { ...selections.dates, start: date })}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-64 justify-start text-left font-normal",
                      !selections.dates.end && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {selections.dates.end ? format(selections.dates.end, "PPP") : "End date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={selections.dates.end}
                    onSelect={(date) => handleSelection('dates', { ...selections.dates, end: date })}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">How long is your trip?</h2>
            <p className="text-gray-600 text-center mb-8">This helps us recommend the right activities</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {durations.map((duration) => {
                const Icon = duration.icon;
                return (
                  <button
                    key={duration.value}
                    onClick={() => handleSelection('duration', duration.value)}
                    className={cn(
                      "p-6 rounded-xl border-2 transition-all hover:shadow-md text-left",
                      selections.duration === duration.value
                        ? "border-sunset-500 bg-sunset-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <Icon className="w-8 h-8 mb-3 text-sunset-500" />
                    <div className="font-semibold text-gray-900">{duration.label}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">What's your travel style?</h2>
            <p className="text-gray-600 text-center mb-8">We'll match you with experiences that fit your vibe</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {travelStyles.map((style) => {
                const Icon = style.icon;
                return (
                  <button
                    key={style.value}
                    onClick={() => handleSelection('travelStyle', style.value)}
                    className={cn(
                      "p-6 rounded-xl border-2 transition-all hover:shadow-md text-left",
                      selections.travelStyle === style.value
                        ? "border-sunset-500 bg-sunset-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <Icon className="w-8 h-8 mb-3 text-sunset-500" />
                    <div className="font-semibold text-gray-900 mb-1">{style.label}</div>
                    <div className="text-sm text-gray-600">{style.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Who's traveling?</h2>
            <p className="text-gray-600 text-center mb-8">This helps us find group-friendly activities</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {groupTypes.map((group) => {
                const Icon = group.icon;
                return (
                  <button
                    key={group.value}
                    onClick={() => handleSelection('groupType', group.value)}
                    className={cn(
                      "p-6 rounded-xl border-2 transition-all hover:shadow-md text-center",
                      selections.groupType === group.value
                        ? "border-sunset-500 bg-sunset-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <Icon className="w-8 h-8 mb-3 text-sunset-500 mx-auto" />
                    <div className="font-semibold text-gray-900">{group.label}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center pt-8">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={step === 1}
            className="text-gray-600"
          >
            Back
          </Button>

          {step < 5 ? (
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="bg-gradient-sunset text-white px-8"
            >
              Continue
            </Button>
          ) : (
            <Button
              onClick={handleFinish}
              disabled={!canProceed()}
              className="bg-gradient-sunset text-white px-8"
            >
              Find My Adventures
              <MapPin className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelOnboarding;
