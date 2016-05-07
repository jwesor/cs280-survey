import numpy as np
import scipy.misc
import sys

name = sys.argv[1]
r = int(sys.argv[2])
c = int(sys.argv[3])
size = 240
offset_r = 6
offset_c = 6

img_compressed = scipy.misc.imread('compressed/%s.jpg' % name)
img_compressed = img_compressed[r+offset_r:r+offset_r+size, c+offset_c:c+offset_c+size]
scipy.misc.imsave('patches/%s_c.png' % name, img_compressed)

img_rec = scipy.misc.imread('reconstructed/%s.png' % name)
img_rec = img_rec[r:r+size, c:c+size]
scipy.misc.imsave('patches/%s_r.png' % name, img_rec)