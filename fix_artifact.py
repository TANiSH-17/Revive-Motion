from PIL import Image

def clean_favicon_artifact(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        width, height = img.size
        datas = img.load()

        # Define the region to scan: Left side (0 to 25% width), Middle (30% to 70% height)
        # Scan for "Yellowish" pixels.
        # Orange is ~ R:232, G:93, B:4. (Green is low)
        # Yellow is ~ R:255, G:255, B:0. (Green is high)
        
        cleaned_count = 0
        
        for x in range(int(width * 0.35)): # Check left 35%
            for y in range(int(height * 0.3), int(height * 0.7)): # Check middle vertical band
                r, g, b, a = datas[x, y]
                
                # If pixel is visible
                if a > 0:
                    # If it has high green content relative to red, it's likely yellow or noise, NOT the deep orange logo.
                    # Safety: Check if it's NOT the deep orange.
                    # Orange G is usually < 0.6 * R. Yellow G is close to R.
                    if g > 180 and g > (r * 0.8): 
                        datas[x, y] = (0, 0, 0, 0) # Erase
                        cleaned_count += 1
                    # Also just aggressively clean very small isolated dots if we could, but color filter is safer.
                    # Let's also check for pure "yellow" R>200, G>200.
                    elif r > 200 and g > 200:
                         datas[x, y] = (0, 0, 0, 0)
                         cleaned_count += 1

        img.save(output_path, "PNG")
        print(f"Cleaned {cleaned_count} artifact pixels from {input_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    clean_favicon_artifact("public/favicon.png", "public/favicon.png")
