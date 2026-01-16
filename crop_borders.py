from PIL import Image
import numpy as np

def crop_black_borders(input_path, output_path, threshold=20):
    try:
        img = Image.open(input_path).convert("RGB")
        data = np.array(img)
        
        # Check for black columns on left and right
        # We'll just look for columns where the average brightness is very low
        
        # Sum color values across rows (axis 0) -> resulting shape (width, 3)
        # We want to identify columns (x-axis) that are dark.
        
        width = data.shape[1]
        
        left_crop = 0
        right_crop = width
        
        # Scan from left
        for x in range(width):
            col = data[:, x, :] # all rows, column x
            if np.mean(col) > threshold:
                left_crop = x
                break
                
        # Scan from right
        for x in range(width - 1, -1, -1):
            col = data[:, x, :]
            if np.mean(col) > threshold:
                right_crop = x + 1
                break
        
        # Add a little padding to the crop if we found borders (optional, but good to be safe)
        # If we didn't find any 'content' (unlikely), default to original.
        
        if left_crop >= right_crop:
            print("No significant crop found or image is all black.")
            return

        print(f"Cropping from x={left_crop} to x={right_crop} (Original width: {width})")
        
        cropped_img = img.crop((left_crop, 0, right_crop, img.height))
        cropped_img.save(output_path)
        print(f"Saved cleaned image to {output_path}")

    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    crop_black_borders("src/assets/doctor.png", "src/assets/doctor.png")
