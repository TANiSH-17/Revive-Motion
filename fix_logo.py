from PIL import Image

def crop_top_line(image_path, output_path, pixels_to_crop=10):
    try:
        img = Image.open(image_path)
        width, height = img.size
        
        # Crop the top 'pixels_to_crop' pixels
        box = (0, pixels_to_crop, width, height)
        cropped_img = img.crop(box)
        
        cropped_img.save(output_path)
        print(f"Successfully cropped {pixels_to_crop} pixels from the top of {image_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    crop_top_line("src/assets/logo.png", "src/assets/logo.png", 5) # Cropping 5 pixels should be enough for a thin line
