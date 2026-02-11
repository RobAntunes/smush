import { useState } from 'react';

interface SellingPlan {
  id: string;
  name: string;
  description?: string;
  priceAdjustments?: {
    adjustmentValue: {
      adjustmentPercentage?: number;
    };
  }[];
}

interface SellingPlanSelectorProps {
  sellingPlans?: SellingPlan[];
  basePrice: string;
  currencyCode: string;
  onSelectionChange: (sellingPlanId?: string) => void;
}

export function SellingPlanSelector({
  sellingPlans = [],
  basePrice,
  currencyCode,
  onSelectionChange,
}: SellingPlanSelectorProps) {
  const [selectedOption, setSelectedOption] = useState<'one-time' | 'subscription'>('one-time');

  const handleSelection = (option: 'one-time' | 'subscription') => {
    setSelectedOption(option);
    if (option === 'subscription' && sellingPlans[0]) {
      onSelectionChange(sellingPlans[0].id);
    } else {
      onSelectionChange(undefined);
    }
  };

  // Calculate subscription price (assuming first selling plan)
  const subscriptionPlan = sellingPlans[0];
  const discount = subscriptionPlan?.priceAdjustments?.[0]?.adjustmentValue?.adjustmentPercentage || 15;
  const subscriptionPrice = (parseFloat(basePrice) * (1 - discount / 100)).toFixed(2);
  const currencySymbol = currencyCode === 'EUR' ? '€' : '$';

  if (!sellingPlans || sellingPlans.length === 0) {
    return null; // No subscriptions available
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Purchase Options</h3>

      <div className="space-y-3">
        {/* One-time Purchase */}
        <label className={`flex items-center justify-between p-4 border-2 rounded cursor-pointer transition-all ${
          selectedOption === 'one-time' ? 'border-cream-700 bg-cream-700/5' : 'border-gray-200'
        }`}>
          <div className="flex items-center">
            <input
              type="radio"
              name="purchase-option"
              value="one-time"
              checked={selectedOption === 'one-time'}
              onChange={() => handleSelection('one-time')}
              className="mr-3 w-4 h-4"
            />
            <div>
              <div className="font-semibold">One-time Purchase</div>
              <div className="text-sm text-cream-600">No commitment</div>
            </div>
          </div>
          <div className="font-bold text-lg">
            {currencySymbol}{parseFloat(basePrice).toFixed(2)}
          </div>
        </label>

        {/* Subscription */}
        <label className={`flex items-center justify-between p-4 border-2 rounded cursor-pointer transition-all ${
          selectedOption === 'subscription' ? 'border-cream-700 bg-cream-700/5' : 'border-gray-200'
        }`}>
          <div className="flex items-center">
            <input
              type="radio"
              name="purchase-option"
              value="subscription"
              checked={selectedOption === 'subscription'}
              onChange={() => handleSelection('subscription')}
              className="mr-3 w-4 h-4"
            />
            <div>
              <div className="font-semibold">Subscribe & Save</div>
              <div className="text-sm text-cream-600">Delivery every 4 weeks • Cancel anytime</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">
              {currencySymbol}{subscriptionPrice}
            </div>
            <div className="text-xs text-cream-700">Save {discount}%</div>
          </div>
        </label>
      </div>
    </div>
  );
}
