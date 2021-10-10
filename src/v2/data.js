export const colors = {
  'white': {
    label: "Pearl White Multi-Coat", value: "white", price: 0
  },
  'black': {
    label: "Solid Black", value: "black", price: 1500
  },
  'silver': {
    label: "Midnight Silver Metallic", value: "silver", price: 1500
  },
  'blue': {
    label: "Deep Blue Metallic", value: "blue", price: 1500
  },
  'red': {
    label: "Red Multi-Coat", value: "red", price: 2500
  }
};

export const models = {
  's': {
    key: 's',
    name: "Model S",
    colors: colors,
    wheels: {
      'wheel_1': {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_1.png`,
        label: '19" Tempest Wheels',
        value: "wheel_1",
        price: 0
      },
      'wheel_2': {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_2.png`,
        label: '21" Sonic Carbon Twin Turbine Wheels',
        value: "wheel_2",
        price: 4500
      },
    },
    types: {
      'long_range_plus': {
        label: "Long Range Plus",
        value: "long_range_plus",
        specs: {
          range: 402,
          top_speed: 155,
          acceleration_time: 3.7,
        },
        price: 69420
      },
      'perfomance': {
        label: "Performance",
        value: "performance",
        specs: {
          range: 387,
          top_speed: 163,
          acceleration_time: 2.3,
        },
        price: 91990,
        benefits: [
          "Quicker acceleration: 0-60 mph in 2.3s",
          "Ludicrous Mode",
          "Enhanced Interior Styling",
          "Carbon fiber spoiler"
        ]
      },
      'plaid': {
        label: "Plaid",
        value: "plaid",
        specs: {
          range: 520,
          top_speed: 200,
          acceleration_time: 2.0,
        },
        price: 139990,
        benefits: [
          "Quickest 0-60 mph and quarter mile acceleration of any production car ever",
          "Acceleration from 0-60 mph: <2.0s",
          "Quarter mile: <9.0s",
          "1,100+ horsepower",
          "Tri Motor All-Wheel Drive"
        ]
      }
    }
  },
  'x': {
    key: 'x',
    name: "Model X",
    colors: colors,
    wheels: {
      'wheel_1': {
        src: `${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_1.png`,
        label: '20" Silver Wheels',
        value: "wheel_1",
        price: 0
      },
      'wheel_2': {
        src: `${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_2.png`,
        label: '22" Onyx Black Wheels',
        value: "wheel_2",
        price: 5500
      }
    },
    types: {
      'long_range_plus': {
        label: "Long Range Plus",
        value: "long_range_plus",
        specs: {
          range: 371,
          top_speed: 155,
          acceleration_time: 4.4
        },
        price: 79900
      },
      'performance': {
        label: "Performance",
        value: "performance",
        specs: {
          range: 341,
          top_speed: 163,
          acceleration_time: 2.6
        },
        price: 99990,
        benefits: [
          "Quicker acceleration: 0-60 mph in 2.6s",
          "Ludicrous Mode",
          "Enhanced Interior Styling"
        ]
      },
    }
  },
  'y': {
    key: 'y',
    name: "Model Y",
    colors: colors,
    wheels: {
      'wheel_1': {
        src: `${process.env.PUBLIC_URL}/wheels/model_y/model_y_wheel_1.png`,
        label: '19’’ Gemini Wheels',
        value: "wheel_1",
        price: 0
      },
      'wheel_2': {
        src: `${process.env.PUBLIC_URL}/wheels/model_y/model_y_wheel_2.png`,
        label: '20’’ Induction Wheels',
        value: "wheel_2",
        price: 2000
      }
    },
    types: {
      'long_range': {
        label: "Long Range",
        value: "long_range",
        specs: {
          range: 326,
          top_speed: 135,
          acceleration_time: 4.8
        },
        price: 45690
      },
      'performance': {
        label: "Performance",
        value: "performance",
        specs: {
          range: 303,
          top_speed: 155,
          acceleration_time: 3.5
        },
        price: 55690,
        benefits: [
          "Increased top speed from 135mph to 155mph",
          "21’’ Überturbine Wheels",
          "Performance Brakes",
          "Lowered suspension",
          "Aluminum alloy pedals"
        ]
      }
    }
  }
};

export const initialConfig = {
  's': {
    car_type: "long_range_plus",
    model: "s",
    color: "white",
    wheels: "wheel_1"
  },
  'x': {
    car_type: "long_range_plus",
    model: "x",
    color: "white",
    wheels: "wheel_1"
  },
  'y': {
    car_type: "long_range",
    model: "y",
    color: "white",
    wheels: "wheel_1"
  }
};